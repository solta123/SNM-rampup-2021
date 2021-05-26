import React, { ReactElement, Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator, RelayMockEnvironment } from 'relay-test-utils';
import { render, act, screen, RenderResult } from '@testing-library/react';
import { MockResolvers } from 'relay-test-utils/lib/RelayMockPayloadGenerator';
import ProductListQueryFetcher, { productQuery } from './ProductListQueryFetcher';

describe('List', () => {
    let environment: RelayMockEnvironment;
    let TestRenderer: () => ReactElement;

    const mockResolver: MockResolvers = {
        Query: () => {
            return {
                allProducts: {
                    nodes: [
                        {
                            price: 2.99,
                            title: 'Laptop',
                            prodId: 'asd',
                            actor: 'Jess'
                        }
                    ]
                }
            }
        }
    };

    beforeEach(() => {
        environment = createMockEnvironment();

        TestRenderer = () => (
            <RelayEnvironmentProvider environment={environment} >
                <Suspense fallback={'Loading...'}>
                    <ProductListQueryFetcher data-testid="asd" />
                </Suspense>
            </RelayEnvironmentProvider>
        );
        (environment as any).mock.queuePendingOperation(productQuery, {});
    });

    it('fetch', async () => {
        const renderer: RenderResult = render(<TestRenderer />);

        act(() => {
            environment.mock.resolveMostRecentOperation(operation =>
                MockPayloadGenerator.generate(operation, mockResolver)
            );
        });

        expect(await renderer.findByText('Laptop', { exact: false })).toBeInTheDocument();
    });
});
