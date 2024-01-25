//get predicted fetch data fron API called

//getting age
const getPredictedAge = async (name: string) =>{
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}

//getting gender
const getPredictedGender = async (name: string) =>{
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}


//getting country
const getPredictedCountry = async (name: string) =>{
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
};


interface params{
    params: {name: string};
};

export default async function Home({params}:params) {

    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const[age, gender, country] = await Promise.all([
        ageData,
        genderData,
        countryData
    ]);

    return (
        
            <div className="max-w-md mt-[300px] flex items-center  justify-center mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">

                    <div className="uppercase tracking-wide mt-2 text-3xl text-indigo-600 font-serif">Personal Info</div>

                    <div className="text-black block mt-6 ml-8 text-lg leading-tight font-medium">Name: {params.name}</div>

                    <div className="text-black block mt-2 ml-8 text-lg leading-tight font-medium">Age: {age?.age}</div>

                    <div className="text-black block mt-2 ml-8 text-lg leading-tight font-medium">Gender: {gender?.gender}</div>

                    <div className="text-black block mt-2 ml-8 text-lg leading-tight font-medium">Nationality: {country?.country[0]?.country_id}</div>
            
                </div>

            </div>
   
        
    );
  }
  