import http from "../http-client";
import mockAxios from 'axios';
import mockProduct from './mock/mock-product.json';

describe("Api testing", () => {
    it("Should return: Welcome to api! as message", async () => {
        // setup
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: {
                message: 'Welcome to api!',
            }
        }))

        // work
        const hello = await http.get('');

        // assertions / expects
        expect(hello.message).toEqual('Welcome to api!');
    });

    it("Should retorn the same product than mockProduct", async () => {
        // setup
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: mockProduct
        }))

        // work
        const result = await http.get('products/1');

        // assertions / expects
        expect(result).toEqual(mockProduct);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3333/api/products/1');
    })

})