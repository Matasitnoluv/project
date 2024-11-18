import * as Form from "@radix-ui/react-form";
import { useEffect,useState } from "react";
import { getCategories } from "@/services/category.services";
import { TypeCategoriesAll} from "@/types/response/reponse.category";

export default function LoginFeature(){
    const [categories,setCatgories] = useState<TypeCategoriesAll[]>([]);

    const getCategoriesData = () => {
        getCategories().then((res) => {
            console.log(res);

            setCatgories(res.responseObject);
        })
    }

    useEffect(() => {
        getCategoriesData();
    }, []);

    return (
		<div className="container md:flex w-full">
			<div className="w-1/2 ... ">
			<div className="bg-scroll background-image: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.avantauk.com%2Fthe-warehouse-setup-and-development-process%2F&psig=AOvVaw25K9vSxbyHQtY92w8wvFMO&ust=1731996400572000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC61sOb5YkDFQAAAAAdAAAAABAJ)"></div>
			</div>
			<div className="w-1/2 ">
			<Form.Root className="container w-80 pt-80">
				<Form.Field className="mb-2.5 grid" name="email">
					<div className="flex items-baseline justify-between">
						<Form.Label>
							Username
						</Form.Label>
						<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
							Email
						</Form.Label>
						
						<Form.Message
							className="text-[13px] text-white opacity-80"
							match="valueMissing"
						>
							Please enter your email
						</Form.Message>
						
						<Form.Message
							className="text-[13px] text-white opacity-80"
							match="typeMismatch"
						>
							Please provide a valid email
						</Form.Message>
						
					</div>
					<Form.Control asChild>
						<input
							className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
							type="email"
							required
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field className="mb-2.5 grid" name="question">
					<div className="flex items-baseline justify-between">
						<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
							Question
						</Form.Label>
						<Form.Message
							className="text-[13px] text-white opacity-80"
							match="valueMissing"
						>
							Please enter a question
						</Form.Message>
					</div>
					<Form.Label>
							Password
						</Form.Label>
					<Form.Control asChild>
					<input
							className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
							type="email"
							required
						/>
					</Form.Control>
				</Form.Field>
				<Form.Submit asChild>
					<button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
						Post question
					</button>
				</Form.Submit>
			</Form.Root>
			</div>
		</div>
        
    )
}
