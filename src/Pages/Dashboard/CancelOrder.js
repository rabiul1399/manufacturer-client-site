import React from 'react';
import { toast } from 'react-toastify';

const CancelOrder = ({ cancelOrder, setCanceling, refetch }) => {
    // const {productName}=cancelOrder;
    console.log(cancelOrder)

    const deletingOrder = () => {
        fetch(`  https://warm-sea-73005.herokuapp.com/order/${cancelOrder._id}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order: is deleted`);
                    setCanceling(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure.This Order cancel</h3>
                    <p className="py-4">Yes! I'm Sure?</p>
                    <div className="modal-action ">
                        <button onClick={() => deletingOrder()} for="my-modal-6" className="btn btn-xs bg-red-500 border-0 ">delete</button>
                        <label for="my-modal-6" className="btn btn-xs">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrder;