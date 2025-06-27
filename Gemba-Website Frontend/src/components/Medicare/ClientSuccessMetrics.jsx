import React from 'react'

const ClientSuccessMetrics = () => {
  return (
    <>
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-blue-100 to-gray-100 text-center">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-10 text-black">
    Real Results That Matter
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-5xl mx-auto ">
    <div>
      <p className="text-4xl md:text-5xl font-bold text-blue-600">95%</p>
      <p className="text-lg text-gray-700">Clean Claim Rate</p>
    </div>
    <div>
      <p className="text-4xl md:text-5xl font-bold text-blue-600">30%</p>
      <p className="text-lg text-gray-700">Faster Reimbursements</p>
    </div>
    <div>
      <p className="text-4xl md:text-5xl font-bold text-blue-600">50%</p>
      <p className="text-lg text-gray-700">Reduction in Denials</p>
    </div>
    <div>
      <p className="text-4xl md:text-5xl font-bold text-blue-600">24/7</p>
      <p className="text-lg text-gray-700">Billing Support</p>
    </div>
  </div>
</section>
</>
  )
}

export default ClientSuccessMetrics