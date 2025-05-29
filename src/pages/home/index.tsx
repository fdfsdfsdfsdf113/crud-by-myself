import productApi from "@/apis/productApi";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product.type";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    //1
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)
  
//2
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productApi.getAll();
        if(products){
            setProducts(products);
        }
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



//4
  const handleDelete = async (id: string) => {
    try {
         await productApi.delete(id);
        
    } catch (error) {
        console.log(error)
        
    }
  };


  //3
  return (
    <div className="p-10">
        <Link to={'/product/create'}>
        
      <Button className="bg-black text-white hover:bg-blue-300">
        Add Product
      </Button>
        </Link>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                Title
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                Desc
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                Price
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                Sale
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, i) => {
              return (
                <tr
                  className="border-b hover:bg-gray-50 border-gray-400"
                  key={i}
                >
                  <td className="py-3 px-4">
                    <Link to={`/`}>{product.title}</Link>
                  </td>
                  <td className="py-3 px-4">{product.desc}</td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">{product.sale}</td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-4">
                      <Link to={`/edit/${product.id}`}>
                        <button className="text-[#FEAF00] cursor-pointer" >
                          <Pencil className="size-5" />
                        </button>
                      </Link>

                      <button className="text-red-500 cursor-pointer" onClick={() => handleDelete(product.id)}>
                        <Trash2 className="size-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
