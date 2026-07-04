import { 
  Menu, 
  Shirt, 
  Footprints, 
  Smartphone, 
  Dumbbell, 
  Gamepad2, 
  MoreHorizontal 
} from "lucide-react";

const categories = [
  { name: "Tudo", icon: Menu },
  { name: "Roupas", icon: Shirt },
  { name: "Calçados", icon: Footprints },
  { name: "Eletrônicos", icon: Smartphone },
  { name: "Esportes", icon: Dumbbell },
  { name: "Brinquedos", icon: Gamepad2 },
  { name: "Outros", icon: MoreHorizontal },
];

export function CategoryBar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-primary rounded-xl py-6 px-4 md:px-12 shadow-lg">
        <h3 className="text-white font-medium mb-6 text-lg">Categorias</h3>
        <div className="flex justify-between items-center overflow-x-auto pb-4 gap-6 hide-scrollbar">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center flex-shrink-0 space-y-3 group cursor-pointer min-w-[70px]">
              <div className="bg-white text-primary p-4 rounded-full group-hover:scale-110 group-hover:bg-gray-100 transition-all shadow-md">
                <category.icon className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
