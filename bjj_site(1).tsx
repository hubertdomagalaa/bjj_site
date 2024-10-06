import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Filter, ShoppingCart, User, MessageSquare, MapPin } from 'lucide-react'

export default function LandingPage() {
  const [priceRange, setPriceRange] = useState([0, 999])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Gi', 'Belts', 'Shorts', 'Rash Guards', 'Mouth Guards', 'Instructionals']
  const products = [
    { id: 1, name: 'Blue Belt', price: 49.99, category: 'Belts', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue_belt-MBOSd0h158fnRevJXqbF4dvmFd2VcN.jpg' },
    { id: 2, name: 'BJJ Shorts', price: 59.99, category: 'Shorts', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shorts_bjj-cjY0m3i1qiXm0R6FxmUAsCjJyYtMhF.jpg' },
    { id: 3, name: 'Under Armour Mouthguard', price: 24.99, category: 'Mouth Guards', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mouthguard-fu5mvR3W0GNe9Poqa1KUAVMDs9NQVj.jpg' },
    { id: 4, name: 'Tropical Rash Guard', price: 64.99, category: 'Rash Guards', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rush%20guard-h9qhgSIiaMzAKmo6ZmIFsmlIV7RBfK.jpg' },
  ]

  const instructionals = [
    { id: 1, name: 'Systematically Attacking the Guard', author: 'Gordon Ryan', price: 249.99, discountedPrice: 74.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gordon_instruct-4pG8K3WTvDlaqdk65qFyJWs642mHLX.jpg' },
    { id: 2, name: 'Front Headlocks: Enter the System Part 1', author: 'John Danaher', price: 299.99, discountedPrice: 89.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/danaher_isntructionals-LEcub2BdDocjAvPvmoAMEQJ69pB2aJ.jpg' },
    { id: 3, name: 'Power Ride: A New Philosophy on Pinning', author: 'Craig Jones', price: 199.99, discountedPrice: 59.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/craig_instruc-NJqsfWdzOyv62NCPCpw4sec5rRtziq.jpg' },
    { id: 4, name: 'Just Stand Up', author: 'Craig Jones', price: 179.99, discountedPrice: 53.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/craig_instrucfcccc-4Dq2udxCJoqzNAGSsil7nzl7sw8raG.jpg' },
  ]

  const forumTopics = [
    { id: 1, title: 'Best guard passing techniques for beginners', replies: 23, views: 156 },
    { id: 2, title: 'How to improve your triangle choke', replies: 45, views: 302 },
    { id: 3, title: 'Dealing with larger opponents in BJJ', replies: 67, views: 589 },
    { id: 4, title: 'Favorite BJJ gear brands?', replies: 89, views: 721 },
  ]

  const nearbyGyms = [
    { id: 1, name: 'Gracie Barra BJJ Academy', distance: '0.5 miles' },
    { id: 2, name: '10th Planet Jiu Jitsu', distance: '1.2 miles' },
    { id: 3, name: 'Alliance BJJ', distance: '2.3 miles' },
    { id: 4, name: 'Atos Jiu-Jitsu', distance: '3.1 miles' },
  ]

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bjj-nSQZ8wfO9HIJ3pUGP6J8G57mqdZ89g.jpg" alt="BJJ Gear Store Logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold">BJJ Gear Store</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-blue-700 hover:bg-blue-600">
              Log In
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-700 hover:bg-blue-600">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="bg-blue-700 hover:bg-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-green-600 hover:bg-green-500">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white text-blue-800 hover:bg-blue-100">
                Category <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-4">
            <span className="font-bold">Price Range:</span>
            <Slider
              min={0}
              max={999}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-64"
            />
            <span>${priceRange[0]} - ${priceRange[1]}</span>
          </div>

          <Button className="bg-blue-800 text-white hover:bg-blue-700">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button className="w-full bg-blue-800 text-white hover:bg-blue-700">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Instructionals on Sale - 70% OFF!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructionals.map((instructional) => (
              <div key={instructional.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={instructional.image} alt={instructional.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{instructional.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {instructional.author}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 line-through">${instructional.price.toFixed(2)}</span>
                    <span className="text-red-600 font-bold">${instructional.discountedPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">Buy Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Community Forum</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4">Recent Topics</h3>
              <div className="space-y-4">
                {forumTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <h4 className="font-semibold text-blue-800 hover:underline cursor-pointer">{topic.title}</h4>
                      <p className="text-sm text-gray-600">Replies: {topic.replies} | Views: {topic.views}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-800 hover:bg-blue-100">
                      <MessageSquare className="mr-2 h-4 w-4" /> Join Discussion
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button className="w-full bg-blue-800 text-white hover:bg-blue-700">View All Topics</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Find BJJ Gyms Near You</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google_maps-uNQYRYGGm46d1EtWnbHWG0oWoJuU9Z.jpg"
                  alt="Map of BJJ gyms"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Nearby BJJ Gyms</h3>
              <div className="space-y-4">
                {nearbyGyms.map((gym) => (
                  <div key={gym.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <h4 className="font-semibold text-blue-800">{gym.name}</h4>
                      <p className="text-sm text-gray-600">{gym.distance}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-800 hover:bg-blue-100">
                      <MapPin className="mr-2 h-4 w-4" /> Directions
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-800 text-white p-6 mt-12">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 BJJ Gear Store. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}