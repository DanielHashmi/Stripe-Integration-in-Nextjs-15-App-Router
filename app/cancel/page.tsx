// app/cancel/page.tsx
export default function CancelPage() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center h-screen text-center p-6">
            <h1 className='text-7xl text-red-600'>Payment Cancelled!</h1>
            <p className='font-bold text-xl'>Your payment was not completed. Please try again!</p>
        </div>
    );
}
