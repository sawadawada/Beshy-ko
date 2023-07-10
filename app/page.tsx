import CopyClipboard from './buttons/copyClipboard';
import CartWheelImg from './client/cartwheelImage';


export default function Home() {

  return (
    <main>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative px-6 pb-8 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className='mx-auto max-w-md'>
            <div className='p-10 text-center'>
              <div className='object-center'>
                <CartWheelImg />
              </div>
              <CopyClipboard />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
