import { Text, Dialog, Button, Flex, TextField } from "@radix-ui/themes";
import { postMsproduct } from "@/services/msproduct.services";
import { useState } from "react";

type DialogMsproductProps = {
    getMsproductData: Function;
}

const DialogAdd = ({ getMsproductData }: DialogMsproductProps) => {
    const [master_product_name, setMaster_product_name] = useState("");
    const [scale_product, setScale_product] = useState("");
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [cubic_centimeter_product, setCubic_centimeter_product] = useState(0);
    const [create_by, setCreate_by] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const handleCreateMsproduct = async () => {
        if (!master_product_name || !scale_product || !height || !length || !width || !cubic_centimeter_product || !create_by || !description || !image) {
            alert("Please enter a product name.");
            return;
        }
        postMsproduct({
            master_product_name: master_product_name, scale_product, create_by, description, image, height: height,
            length: 0,
            width: 0,
            cubic_centimeter_product: 0
        })
            .then((response) => {
                if (response.statusCode === 200) {
                    setMaster_product_name("");
                    setScale_product("");
                    setHeight(0);
                    setLength(0);
                    setWidth(0);
                    setCubic_centimeter_product(0);
                    setCreate_by("");
                    setDescription("");
                    setImage("");
                    getMsproductData();
                } else if (response.statusCode === 400) {
                    alert(response.message);
                } else {
                    alert("Unexpected error:" + response.message);
                }
            })
            .catch((error) => {
                console.error("Error createing product", error.response?.date || error.message);
                alert("Failed to create product. Please try again");
            });
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size="1">Create</Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create Product</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Product Name
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setMaster_product_name(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            scale_product
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setScale_product(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            height
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setHeight(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            length
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setLength(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            width
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setWidth(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            cubic_centimeter_product
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setCubic_centimeter_product(parseFloat(event.target.value))}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            create_by
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setCreate_by(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            description
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            image
                        </Text>
                        <TextField.Root
                            defaultValue=""
                            placeholder="Enter your Product name"
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </label>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleCreateMsproduct}>Save</Button>
                    </Dialog.Close>.
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )

};

export default DialogAdd