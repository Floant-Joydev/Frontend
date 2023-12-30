import React, { useEffect } from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { addAddressAsync, selectUser } from "../../features/auth/authSlice";
import { toast } from 'react-toastify';

const AddAddress = () => {

  const {address_ind} = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const loginuser = useSelector( selectUser );
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if( address_ind ){
      setValue("name", loginuser.address[address_ind].name)
      setValue("contact", loginuser.address[address_ind].contact)
      setValue("pincode", loginuser.address[address_ind].pincode)
      setValue("address", loginuser.address[address_ind].address)
      setValue("district", loginuser.address[address_ind].district)
      setValue("state", loginuser.address[address_ind].state)
      setValue("town", loginuser.address[address_ind].town)
    }
  }, [address_ind, setValue, loginuser])

  return (
    <>
      <div className="auth-main">
        <section className="auth-heading">
          <div>
            <Link to={'/address'}><img src={back} alt="Back_here" /></Link>
            <p>Add Address</p>
          </div>
          <div>
            <img src={secure} alt="" />
            <p>100% Secure</p>
          </div>
        </section>

        <form className="p1" onSubmit={handleSubmit((data) => {
          if( address_ind !== undefined ){
            toast.info('Address updation will come soon...')
          }
          else if( loginuser.address.length >= 5 ){
            toast.error("You cannot add more than 4 address ");
          }
          else{
            dispatch(addAddressAsync(data));
            Navigate('/address');
          }
        })}>
          <p style={{ fontSize: "1.4rem" }}>
            Add Your Delivery Details/Address
          </p>
          <div className="two-ele">
            <section className="first">
              <label htmlFor="name" >Full Name</label>
              <input type="text" id="name" {...register('name', { required: "Enter Name Here"})} />
              {errors.name && <p style={{color: "red", textAlign: "start"}}>-{errors.name.message}</p> }
            </section>
            <section className="first">
              <label htmlFor="number" >Contact Number</label>
              <input type="text" id="number" {...register('contact', { required: "Enter Contact Number Here"})}/>
              {errors.number && <p style={{color: "red", textAlign: "start"}}>-{errors.number.message}</p> }
            </section>
          </div>
          <div className="two-ele">
            <section className="first">
              <label htmlFor="pinCode">Pin Code</label>
              <input type="text" id="pinCode" {...register('pincode', { required: "Enter Pincode Here"})} />
              {errors.pincode && <p style={{color: "red", textAlign: "start"}}>-{errors.pincode.message}</p> }
            </section>
            <section className="first">
              <label htmlFor="state">State</label>
              <input type="text" id="state"  {...register('state', { required: "Enter state Here"})} />
              {errors.state && <p style={{color: "red", textAlign: "start"}}>-{errors.state.message}</p> }
            </section>
          </div>
          <div>
            <label htmlFor="address">
              Address (House No, Building, Street, Area)*
            </label>
            <input type="text" id="address" {...register('address', { required: "Enter address Here"})}/>
            {errors.address && <p style={{color: "red", textAlign: "start"}}>-{errors.address.message}</p> }
          </div>
          <div className="two-ele">
            <section className="first">
              <label htmlFor="town">Locality/Town</label>
              <input type="text" id="town" {...register('town', { required: "Enter town Here"})}/>
              {errors.town && <p style={{color: "red", textAlign: "start"}}>-{errors.town.message}</p> }
            </section>
            <section className="first">
              <label htmlFor="district">District</label>
              <input type="text" id="district" {...register('district', { required: "Enter district Here"})}/>
              {errors.district && <p style={{color: "red", textAlign: "start"}}>-{errors.district.message}</p> }
            </section>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddAddress;


// {
// products: [
//   {
//     productID: "",
//     quantity: 2,
//   },
//   {
//     productID: "",
//     quantity: 2,
//   },
// ],
// address: {
// },644
// totalamount : 
// paymentMethod : 
// status : "pending"
// }