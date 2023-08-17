import React from 'react';
import { parseEther } from 'ethers';


export default function BuyCoffee({state}) {
    const buyCoffee = async (e) => {
        e.preventDefault()

        const {contract} = state;

        const name = document.querySelector('#name').value
        const message = document.querySelector('#message').value

        const amount = {value: parseEther("0.001")}
        const transaction = await contract.buyCoffee(name, message, amount);
        await transaction.wait();

        // provide a toast
        console.log("Transaction successfull 🚀")


    }
  return (
    <div>
        <h1 className='text-3xl font-bold underline text-red-500'>Buy me a Coffee!</h1>
        <form onSubmit={buyCoffee}>

        <label htmlFor="name">Name</label>
        <input id='name' type="text" name='name' />
        <label htmlFor="message">Message</label>
        <input id='message' type="text" name='message' />
        <button type='submit' className='bg-black text-white  px-4 pb-1 rounded-sm'>PAY</button>
        </form>
    </div>
  )
}
