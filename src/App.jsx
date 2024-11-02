import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Table from './components/Table/Table'
import { toast } from 'react-toastify'


function App() {
  const [recipes, setRecipes] = useState([])
  const [item, setItem] = useState(0)
  const [prepareItem, setPrepareItem] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState(0)
  const [currentlyCookingItem, setCurrentlyCookingItem] = useState([])

  useEffect(() => {
    fetch('/foodRecipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data));
  }, [])
  
  const handleCookItem = (newItem) => {
    console.log(newItem);
    const isExistPrepare = prepareItem.find(recipe => recipe.recipe_id == newItem.recipe_id);
    console.log(isExistPrepare);
    if(!isExistPrepare){
      setPrepareItem([...prepareItem, newItem]);
      const newItems = (item + 1);
      setItem(newItems);
    }
    else{
        toast('Already Exist');
    }
    // console.log(id);
  }

  const handlePrepare = (id) => {
    // console.log(id);
    const decreaseItem = (item - 1);
    setItem(decreaseItem);
    setCurrentlyCooking(currentlyCooking + 1);

    const setInCurrentlyCooking = prepareItem.find(item => item.recipe_id == id);
    const setInCurrentlyCookingAll = [...currentlyCookingItem, setInCurrentlyCooking]
    setCurrentlyCookingItem(setInCurrentlyCookingAll);

    const remainingItem = prepareItem.filter(item => item.recipe_id !== id);
    setPrepareItem(remainingItem);
  }
  // console.log(item);
  return (
    <>
      <Header></Header>
      {/* Section Main */}
      <div className='container mx-auto'>
        <div className='text-center mt-24'>
              <h2 className='font-semibold text-4xl mb-6'>Our Recipes</h2>
              <p className='text-[#150B2B99] md:w-2/3 mx-auto font-normal text-base'>Each recipe is thoughtfully curated, incorporating fresh, wholesome ingredients to ensure both flavor and nutritional value. From classic comfort foods to innovative culinary creations, the collection caters to seasoned home cooks and kitchen novices alike</p>

              {/*Cards section*/}
              <div className='card-main flex gap-6 flex-col md:flex-row mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[60%]'>
                    {
                      recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCookItem={handleCookItem}></Recipe>)
                    }
                </div>

                {/* Want to cook table */}
                <div className='text-center border border-[#28282833] rounded-2xl md:w-2/5'>
                    <h2 className='font-semibold text-2xl text-[#282828] mt-8'>Want to cook: {item} </h2>
                    <hr className='w-80 mx-auto my-5' />
                    <table className='md:w-full'>
                        <thead className='font-fira w-1/2 md:w-full font-medium text-[#878787]'>
                            <tr className='w-1/2'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='font-fira table-body font-normal text-[#282828B3] bg-[#28282808] w-1/2 md:w-full h-4'>
                            {
                              prepareItem.map((item, index) => <Table
                               key={item.recipe_id} item={item} index={index}
                               handlePrepare={handlePrepare}>
                               </Table>)
                            }
                        </tbody>
                    </table>
                    <h2 className='font-semibold text-2xl text-[#282828] mt-8'>Currently cooking: {currentlyCooking} </h2>
                    <hr className='w-80 mx-auto my-5' />
                    <table className='w-full'>
                            <thead className='font-fira font-medium text-[#878787]'>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody className='font-fira table-body font-normal text-[#282828B3] bg-[#28282808] w-1/2 h-4'>
                              {
                                currentlyCookingItem.map((cookingItem, index) => 
                                  <tr key={cookingItem.recipe_id}>
                                    <td className='p-2 md:p-4'>{index + 1}</td>
                                    <td className='p-2 md:p-4'>{cookingItem.recipe_name}</td>
                                    <td className='p-2 md:p-4'>{cookingItem.preparing_time}</td>
                                    <td className='p-2 md:p-4'>{cookingItem.calories}</td>
                                  </tr>)
                              }
                            </tbody>
                    </table>
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
