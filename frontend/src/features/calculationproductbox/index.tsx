// src/components/CalculationForm.js
import React from 'react';
import { Table, Card, Button, } from "@radix-ui/themes";

const CalculationProductAndBoxPage = () => {
    return (
        <div className="bg-gray-100 p-36 rounded-lg shadow-md h-screen">
            <h2 className="text-2xl font-bold mb-2">Calculation Product & Box</h2>
            <input
                type="text"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                placeholder="Document Number (Box202409070701)"
            />

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-medium mb-2">
                        <Button className="bg-green-400 hover:bg-green-500 hover:cursor-pointer
                         text-white font-bold py-2 px-4 rounded shadow-xl w-20">Product</Button>
                    </h3>
                    <Card variant="ghost" className="w-3/4 m-auto">
                        <Table.Root variant="ghost">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Scale (cm)</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Count</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {/* {msproduct && msproduct.map((msproduct: TypeMsproductAll) => ( */}
                                <Table.Row >
                                    <Table.RowHeaderCell></Table.RowHeaderCell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>
                    </Card>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2">
                        <Button
                            className="bg-green-400 hover:bg-green-500 hover:cursor-pointer
                                       text-white font-bold py-2 px-4 rounded shadow-xl w-20 ">Box</Button>
                    </h3>
                    <Card variant="ghost" className="w-3/4 m-auto">
                        <Table.Root variant="ghost">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Scale (cm)</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Count</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {/* {msproduct && msproduct.map((msproduct: TypeMsproductAll) => ( */}
                                <Table.Row >
                                    <Table.RowHeaderCell></Table.RowHeaderCell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>
                    </Card>
                </div>
            </div>

            <h3 className="text-lg font-medium mb-2">
                <Button
                    className="bg-green-400 hover:bg-green-500 hover:cursor-pointer
                                       text-white font-bold py-2 px-4 rounded shadow-xl w-30 mt-10">Calculation</Button>
            </h3>
            <div className="grid grid-cols-1/2 gap-3">
                <Card variant="ghost" className="w-3/4">
                    <Table.Root variant="ghost">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Scale (cm)</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Count</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {/* {msproduct && msproduct.map((msproduct: TypeMsproductAll) => ( */}
                            <Table.Row >
                                <Table.RowHeaderCell></Table.RowHeaderCell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Card>
            </div>
        </div>
    );
};

export default CalculationProductAndBoxPage;