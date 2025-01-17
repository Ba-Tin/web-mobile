import React from 'react'

const OrderLookup = () => {
    return (
        <>
            <div>
                <BackHome />
            </div>

            <div class="flex flex-col mx-auto w-10/12">
                <div className='text-center'>
                    <i class="bi bi-check2-circle text-16 leading-4-em block text-green-900"></i>
                </div>
                <div className="mt-4">
                    <span className='text-center block text-7 font-semibold text-black'>Kiểm tra đơn hàng của bạn </span>
                </div>
                <div className="w-2/2 flex justify-start items-center relative text-center">
                    <i className="bi bi-search absolute ml-2 w-10"></i>
                    <input
                        placeholder="Nhập số điện thoại của bạn"
                        class="border border-gray-500 rounded-lg p-4 w-full pl-10"
                    />
                </div>
                <div className='text-center mt-9'>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-1/4 rounded'>Tra cứu</button>
                </div>
            </div>

        </>
    )
}

export default OrderLookup