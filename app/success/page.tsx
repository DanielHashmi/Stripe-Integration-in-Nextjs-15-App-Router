// app/success/page.tsx
export default function SuccessPage() {
    return (
      <div className="flex flex-col gap-6 justify-center items-center h-screen text-center p-6">
        <h1 className='text-7xl text-yellow-600'>Payment Successful!</h1>
        <p className='font-bold text-xl'>That was it now check your stripe account transactions history you should see $15 Paid!</p>
      </div>
    );
  }
  