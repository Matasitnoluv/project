// src/components/CalculationForm.js
import React from 'react';

const CalculationProductAndBoxPage = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Calculation Product&Box</h2>
            <input
                type="text"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                placeholder="Document Number (Box202409070701)"
            />

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-medium mb-2">Product</h3>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
                        placeholder="Code product"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2">Box</h3>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
                        placeholder="Code box"
                    />
                </div>
            </div>

            <h3 className="text-lg font-medium mb-2">Calculation</h3>
            <div className="grid grid-cols-5 gap-4">
                <input
                    type="text"
                    className="col-span-1 px-4 py-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="No. box"
                />
                <input
                    type="text"
                    className="col-span-1 px-4 py-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Codebox"
                />
                <input
                    type="text"
                    className="col-span-1 px-4 py-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Product"
                />
                <input
                    type="text"
                    className="col-span-1 px-4 py-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="CodeProduct"
                />
                <input
                    type="text"
                    className="col-span-1 px-4 py-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Count"
                />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Calculate
            </button>
        </div>
    );
};

export default CalculationProductAndBoxPage;