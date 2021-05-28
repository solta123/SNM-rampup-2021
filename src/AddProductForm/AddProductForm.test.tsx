import React, { ReactElement } from 'react';
import { customersQuery } from '../List/List';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator, RelayMockEnvironment } from 'relay-test-utils';
import { render, act, RenderResult, cleanup } from '@testing-library/react';
import { MockResolvers } from 'relay-test-utils/lib/RelayMockPayloadGenerator';
import AddProductForm from './AddProductForm';
import userEvent from '@testing-library/user-event';

describe('AddProductForm', () => {
    let environment: RelayMockEnvironment;
    let TestRenderer: () => ReactElement;

    const mockMutationResolver: MockResolvers = {
        Mutation() {
            return {
                createProduct: {
                    product: {
                        actor: 'aaaaa',
                        price: 9,
                        title: 'aaaaa',
                        prodId: 10
                    }
                }
            }
        }
    }

    beforeEach(() => {
        environment = createMockEnvironment();

        TestRenderer = () => (
            <RelayEnvironmentProvider environment={environment} >
                <AddProductForm />
            </RelayEnvironmentProvider>
        );
        (environment as any).mock.queuePendingOperation(customersQuery, {});
    });

    afterEach(() => cleanup());

    it('should add new product', async () => {
        const renderer: RenderResult = render(<TestRenderer />);

        const titleInput = renderer.getByLabelText('Title');
        const actorInput = renderer.getByLabelText('Actor');

        userEvent.type(titleInput, 'aaaaa');
        userEvent.type(actorInput, 'aaaaa');
        userEvent.type(renderer.getByLabelText('Price'), '9');

        environment.mock.queueOperationResolver(operation =>
            MockPayloadGenerator.generate(operation, mockMutationResolver)
        );

        act(() => {
            userEvent.click(renderer.getByRole('button', { name: /submit/i }));
        });

        expect(await renderer.findByText('Successfully added!')).toBeInTheDocument();
    });
});