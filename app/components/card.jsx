import React from 'react';

const Card = ({ jogos }) => {
    return (
        <div className='flex flex-row gap-[58px] justify-center py-6 flex-wrap relative bottom-0'>
            {jogos && jogos.map((item) => (
                <div className='relative'>
                    <div key={item.Jogo} className="md:w-[200px] md:h-[300px] bg-zinc-400 cursor-pointer items-center flex flex-col gap-2 p-5">
                        <div className='absolute bg-zinc-500 top-0 left-0 h-full w-full rotate-6 z-[-1] text-center' />
                        <img src={item.Img} alt={item.Jogo} />
                        <h3>{item.Jogo}</h3>
                        <p>{item.Tempo}</p>
                        <p>{item.Jogadores}</p>
                        <p>{item.Formato}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;