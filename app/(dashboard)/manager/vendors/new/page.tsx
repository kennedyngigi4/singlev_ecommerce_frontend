import React from 'react'
import VendorForm from '../_components/vendor-form'

const NewVendor = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <div className="pb-5">
        <h1 className="text-xl font-semibold text-qprimary">Register New Vendor</h1>
        <p className="text-slate-500 text-sm">By filling in form and submitting an active vendor will be registered on Quza Maisha database. </p>
      </div>

      <VendorForm />
    </div>
  )
}

export default NewVendor