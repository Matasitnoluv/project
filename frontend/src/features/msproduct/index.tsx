import { Table, Card, Button } from "@radix-ui/themes";

export default function MsproductFeature() {
    return (
        <>
            <img
                alt="Your Company"
                src="https://media.discordapp.net/attachments/1274988572679864412/1289996431712845905/Logo.png?ex=6744ae4c&is=67435ccc&hm=3ffde792c371b6988f6b0f7f2dfebbb4da9a785bf5b47629c3787eb349ca9da7&=&format=webp&quality=lossless"
                className="mx-5 ml-5 h-44"
            />
            <div className="">

                <div className="columns-3xs w-1/2 l- ">
                    <div className="container mx-auto">Report product </div>

                    <div className="mb-2 xl:w-50 container ml-auto">
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

                    <Button className="container ml-auto" color="green" variant="soft">
                        Create
                    </Button>
                </div>
                <Card variant="ghost" className="w-1/2 m-auto">
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
                                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                <Table.Cell>zahra@example.com</Table.Cell>
                                <Table.Cell>Admin</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table.Root>

                </Card>
            </div>
        </>
    )
}
