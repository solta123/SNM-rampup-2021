import React, { ReactElement, Suspense } from 'react';
import List, { customersQuery } from './List';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator, RelayMockEnvironment } from 'relay-test-utils';
import { render, RenderResult } from '@testing-library/react';
import { MockResolvers } from 'relay-test-utils/lib/RelayMockPayloadGenerator';
import { act } from 'react-dom/test-utils';

describe('List', () => {
    let environment: RelayMockEnvironment;
    let TestRenderer: () => ReactElement;
    const mockResolver: MockResolvers = {
        ListCustomersQuery: () => {
            return {
                allCustomers: {
                    nodes: [
                        {
                            email: 'email',
                            firstname: 'Jon',
                            lastname: 'Bauer',
                            country: 'us',
                            age: 50
                        }
                    ]
                }
            }
        },
    };

    beforeEach(() => {
        environment = createMockEnvironment();

        TestRenderer = () => (
            <RelayEnvironmentProvider environment={environment} >
                <Suspense fallback={'Loading...'}>
                    <List data-testid="asd" />
                </Suspense>
            </RelayEnvironmentProvider>
        );
        (environment as any).mock.queuePendingOperation(customersQuery, {});
    });

    it('fetch', async () => {
        const renderer: RenderResult = render(<TestRenderer />);

        act(() => {
            environment.mock.resolveMostRecentOperation(operation =>
                MockPayloadGenerator.generate(operation, mockResolver)
            );
        })

        expect(await renderer.findByText('List')).toBeDefined();
    });
});
