import React from 'react'
import imgsp1 from '/src/assets/imgsp1.avif'
import './Special.css'


const Special = () => {
  return (
    <div className='text-white'>
      <div className='bg-black text-white flex flex-col justify-center items-center gap-5 py-5'>
        <h1 className='text-[50px] font-bold w-120'>SPECIAL EDITIONS</h1>
        <div ><p className='text-[22px] text-center container'>Masterful craftsmanship and meticulous attention to detail merge to create highly revered automotive icons. Cadillac Special Editions are design and engineering marvels, carefully crafted since 1953 and continuing today.</p></div>
      </div>
      <div>
        <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-v-series-blackwing-collector-series-masthead-l.jpg?imwidth=1920")]'>
        <div className='flex flex-col gap-[60vh] pt-2 '>
        <h1 className=' text-[20px] text-center  lg:text-center lg:text-[45px] container  font-bold'>V-SERIES BLACKWING COLLECTOR SERIES</h1>
        <div><h1 className='text-[20px] text-center lg:text-center lg:text-[45px] container font-bold'>LE MONSTRE EDITION</h1>
        <p className='text-center text-[23px] font-semibold text-gray-500'>2025 CT5-V BLACKWING</p>
        </div>
        </div>
        </div>
      </div>

      <div className='bg-black'>
      <div className='flex flex-col '> <img className='h-[90vh]' src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-le-monstre-masthead-l-v2.jpg?imwidth=3000"alt="" />
      <h1 className=''>Preproduction model shown throughout. Actual production model will vary. Available early 2025.</h1>
      </div>
      </div>

      <div class="work">
        <p>Preproduction model shown throughout. Actual production model will vary. Available early 2025.</p>

      </div>

      <div className='bg-black grid grid-cols-1 lg:grid-cols-2 pt-4 '>
        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-le-monstre-interior-s-v2.jpg?imwidth=800" alt="" />
      <div className='container'><h1 className='text-[25px] font-semibold'>Cadillac’s history grows ever more venerated as the Le Monstre edition takes center stage—honoring the 75th anniversary of the debut of its namesake inspiration—flaunting a Phantom Blue interior and Santorini accents in your choice of Sky Cool Gray or Jet Black with heritage number stitching. In homage to the 101st anniversary of the first 24 hours of the original Le Mans race, production of the Le Monstre edition is limited to 101 vehicles.</h1>
      <button className=' shadow-lg bg-white text-black p-3 px-8 rounded-lg text-[18px] font-semibold mt-2'> VIEW DETAILS</button>
      </div>
      </div>
      <div className='bg-black flex flex-col text-center  '>
        <h1 className='text-[35px] font-bold' >PETIT PATAUD EDITION</h1>
        <p className='text-[20px] text-gray-400'>2025 CT4-V BLACKWING</p>
      </div>
      <div>
       <div> <img className='w-[100vw] h-[90vh]' src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-petit-pataud-masthead-l-v2.jpg?imwidth=3000" alt="" />
       <p className='bg-black pl-14'>Preproduction model shown throughout. Actual production model will vary. Available early 2025.</p>
       </div>
       <div className='bg-black grid grid-cols-1 lg:grid-cols-2 '>
       <div className='container py-[10%]'> <h1 className='text-[25px] font-semibold '>Cadillac racing legend is the raison d'être for the Petit Pataud edition. In tribute to our 1950 debut at Le Mans, only 50 vehicles will be produced. Each celebrates performance-first craftsmanship and race-inspired detailing with heritage number inlays, sill plate and shifter medallion design and exclusive, adrenaline-stirring colors.</h1>
        <button className=' shadow-lg bg-white text-black p-3 px-8 rounded-lg text-[18px] font-semibold mt-2'> VIEW DETAILS</button>
        </div>
        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-petit-pataud-interior-s.jpg?imwidth=800" alt="" />
        
       </div>

      </div>
      <div>
        <img className='w-[100vw] h-[80vh]' src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicle-groups/special-editions/special-editions/01-images/24-cadillac-special-editions-masthead-overlay-ct5-v-interior-s-v3.jpg?imwidth=800" alt="" />
      </div>
    </div>

    
  )
}

export default Special 