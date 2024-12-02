import { Table, Card, Button, AlertDialog, Flex, Text, TextField } from "@radix-ui/themes";

export default function MsboxFeature() {
    return (
        <>
            <div className="">

                <div className="flex flex-row w-1/2 m-auto p-14">
                    <div className="basis-1/4">Report Box </div>

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
                            <AlertDialog.Trigger>
                                <Button className="basis-1/2 mx-10" color="green" variant="soft">Create</Button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Content maxWidth="450px">
                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="7" mb="5" weight="bold">
                                            Create Box
                                        </Text>
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Code product
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Code product"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Name product
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Name product"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Width
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Width"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Lenght
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Lenght"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Hight
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Hight"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Description
                                        </Text>
                                        <TextField.Root
                                            placeholder="Enter Description"
                                        />
                                    </label>
                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <AlertDialog.Cancel>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </AlertDialog.Cancel>
                                    <AlertDialog.Action>
                                        <Button variant="solid" color="green">
                                            Save
                                        </Button>
                                    </AlertDialog.Action>
                                </Flex>
                            </AlertDialog.Content>
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
                            <Table.Row>
                                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                <Table.Cell>danilo@example.com</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.RowHeaderCell className="bg-gray-100">Zahra Ambessa</Table.RowHeaderCell>
                                <Table.Cell className="bg-gray-100">zahra@example.com</Table.Cell>
                                <Table.Cell className="bg-gray-100">Admin</Table.Cell>
                                <Table.Cell className="bg-gray-100">Developer</Table.Cell>
                                <Table.Cell className="bg-gray-100">Developer</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table.Root>

                </Card>
            </div>
        </>
    )
}
