

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import productApi from "@/apis/productApi"


const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  desc : z.string(),
  price : z.number().min(0),
  sale :z.number().min(0),
})


const CreatePage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      desc: "",
      price: 0,
      sale: 0,
    },
  })


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        await productApi.create(values)
        
      } catch (error) {
        console.log(error)
        
      }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div className=" ">



      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desc</FormLabel>
              <FormControl>
                <Textarea placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="price" {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale</FormLabel>
              <FormControl>
                <Input type="number" placeholder="sale" {...field} 
                onChange={(e) => field.onChange(Number(e.target.value))}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

        <div className="flex space-x-5">


        <Button className="flex-1 bg-black text-white" type="submit">Submit</Button>

        <Link to={'/product'} >
        
      <Button className=" bg-black text-white hover:bg-blue-300 mb-5 ">
        Back
      </Button>
        </Link>
        </div>
    

      </form>
    </Form>
    </div>
  )
}

export default CreatePage