import { Table, Card, AlertDialog, Text, } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { getMsproduct } from "@/services/msproduct.services";
import { TypeMsproductAll } from "@/types/response/reponse.msproduct"
import DialogAdd from "./components/dilogAddmsproduct";
import DialogEdit from "./components/dilogEditmsproduct"

export default function MsproductFeature() {
    const [msproduct, setMsproduct] = useState<TypeMsproductAll[]>([]);
    const getMsproductData = () => {
        getMsproduct().then((res) => {
            console.log(res);

            setMsproduct(res.responseObject);
        })
    }
    useEffect(() => {
        getMsproductData();
    }, []);

    return (
        <>
            <div className="">

                <div className="flex flex-row w-1/2 m-auto p-14">
                    <div className="basis-1/4">Report product </div>

                    <div className="basis-1/2 ">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 l-5 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2" />

                            {/* <!--Search icon--> */}
                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <AlertDialog.Root>
                            <Text as="div" size="2" weight="bold" color="green">
                                <DialogAdd
                                    getMsproductData={getMsproductData}
                                />
                            </Text>
                        </AlertDialog.Root>
                    </div>
                </div>

                <Card variant="ghost" className="w-3/4 m-auto">
                    <Table.Root variant="ghost">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>Code product</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Name product</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Scale product</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>size product("cc")</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {msproduct && msproduct.map((msproduct: TypeMsproductAll) => (
                                <Table.Row key={msproduct.master_product_id}>
                                    <Table.RowHeaderCell>{msproduct.master_product_id}</Table.RowHeaderCell>
                                    <Table.Cell>{msproduct.master_product_name}</Table.Cell>
                                    <Table.Cell>{msproduct.scale_product}</Table.Cell>
                                    <Table.Cell>{msproduct.cubic_centimeter_product}</Table.Cell>
                                    {/* 
                                    <Table.Cell>
                                        <DialogEdit
                                            getMsproductData={getMsproductData}
                                            master_product_id={msproduct.master_product_id}
                                            mster_product_name={msproduct.master_product_name}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <AlertDialogDelete
                                            getCategoriesData={getCategoriesData}
                                            id={category.id}
                                            category_name={category.category_name}
                                        />
                                    </Table.Cell> */}
                                </Table.Row>
                            ))}


                        </Table.Body>
                    </Table.Root>

                </Card>
            </div>
        </>
    )
}
