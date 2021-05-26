/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { commitMutation, useRelayEnvironment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { FormApi } from 'final-form';

interface ProductInput {
    title: string,
    actor: string,
    price: number
}

interface ProductErrors {
    title?: string,
    actor?: string,
    price?: string
}

interface InputProps {
    hasError: boolean
}

const TextField = styled.input<InputProps>`
    display: block;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid gray;
    min-height: 30px;
    transition: 0.1s;
    box-shadow: ${props => props.hasError ? '0 0 1px 2px #f02626' : 'none'};
    &:focus {
        border-color: lightblue;
        box-shadow: ${props => props.hasError ? '0 0 1px 2px #f02626' : '0 0 5px 2px lightblue'};
        outline: none;
    }
`;

const FieldContainer = styled.div`
    margin: 0.5rem 0;
`;

const ProductForm = styled.form`
    margin: 0 auto;
    width: 95%;
    @media(min-width: 768px) {
            width: 70%
    };
    @media(min-width: 1225px) {
        width: 50%
    };
`;

const ErrorMessage = styled.span`
    color: red;
`;

const AddProductForm = () => {
    const [isSuccessDisplayed, setSuccessDisplayed] = useState(false)

    const environment = useRelayEnvironment();
    const displaySuccess = () => {
        setSuccessDisplayed(true);
        setTimeout(() => setSuccessDisplayed(false), 5000);
    };

    const commit = async (input: ProductInput, resetFunction: () => void) => {
        console.log(input)
        const queryVariebles = {
            input: {
                product: {
                    ...input,
                    category: 10,
                    commonProdId: 10,
                }
            }
        };

        return commitMutation(environment, {
            mutation: graphql`
                mutation AddProductFormMutation($input: CreateProductInput!) {
                    createProduct(
                        input: $input
                    ) {
                        product {
                            actor
                            price
                            title
                            prodId
                        }
                    }
                }
            `,
            variables: queryVariebles,
            updater: (store) => {
                const payload = store.getRootField('createProduct')?.getLinkedRecord('product');
                const params = { first: 20, orderBy: 'PROD_ID_DESC' };

                const allProducts = store.getRoot()?.getLinkedRecord('allProducts', params)
                const products = allProducts?.getLinkedRecords('nodes') || [];

                let newProducts;
                if (payload) {
                    products.pop();
                    newProducts = [payload, ...products];
                } else {
                    newProducts = [...products]
                }
                allProducts?.setLinkedRecords(newProducts, 'nodes');
            },
            onCompleted() {
                console.log('completed mutation')
                resetFunction();
                displaySuccess();
            }
        });
    };

    const handleSubmit = async (inputs: ProductInput, formFunctions: FormApi<ProductInput>) => {
        console.log(inputs)
        await commit(inputs, formFunctions.reset);

        formFunctions.resetFieldState('title');
        formFunctions.resetFieldState('actor');
        formFunctions.resetFieldState('price');
    };

    const validate = (values: ProductInput) => {
        const errors: ProductErrors = {};

        if (!values.title || values.title.length < 3) {
            errors.title = 'Product name is too short';
        }

        if (!values.actor || values.actor.length < 3) {
            errors.actor = 'Actor name required';
        }

        if ((!values.price && values.price !== 0) || values.price < 0) {
            errors.price = 'Price is too low';
        }

        return errors;
    };

    return <Form<ProductInput>
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
            <ProductForm onSubmit={handleSubmit}>
                <Field name="title" render={({ input, meta }) => (
                    <FieldContainer>
                        <label htmlFor="title"> Title</label>
                        <TextField id="title" type="text" placeholder="Title" hasError={meta.error && meta.touched}
                            {...input} />
                        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                    </FieldContainer>
                )} />

                <Field name="actor" render={({ input, meta }) => (
                    <FieldContainer>
                        <label htmlFor="actor">Actor</label>
                        <TextField id="actor" type="text" placeholder="Actor" hasError={meta.error && meta.touched}
                            {...input} />
                        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                    </FieldContainer>
                )} />

                <Field name="price" render={({ input, meta }) => (
                    <FieldContainer>
                        <label htmlFor="price">Price</label>
                        <TextField id="price" type="number" placeholder="Price" hasError={meta.error && meta.touched}
                            {...input} />
                        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                    </FieldContainer>
                )} />

                <div>
                    <button type="submit">Submit</button>
                </div>
                {isSuccessDisplayed && <div css={{ color: 'green' }}>Successfully added!</div>}
            </ProductForm>
        )}>
    </Form>
};

export default AddProductForm;
