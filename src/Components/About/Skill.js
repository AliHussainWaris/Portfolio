import React from 'react'

export const Skill = ()=>{
    const data = [
        {
            title:"HTML",
            per:"100",
        },
        {
            title:"CSS",
            per:"100",
        },
        {
            title:"Javascript",
            per:"95",
        },
        {
            title:"PHP",
            per:"80",
        },
        {
            title:"React",
            per:"80",
        },
        {
            title:"MySQL",
            per:"80",
        }
    ]
    return <>
    <div className='sm:grid grid-rows-2 grid-flow-col gap-4 mt-8'>
    {data.map((datas)=>(
        <div>
        <h1>{datas.title}</h1>
            <div class="w-full bg-gray-300 rounded-full h-1">
                <div class="bg-sky-500 h-full rounded-full" style={{width: datas.per + '%'}}></div>
            </div>
        </div>
        ))}
    </div>
    </>
}
