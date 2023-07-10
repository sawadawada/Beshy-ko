import Image from 'next/image'
import CartWheel from '@/public/cartwheel.gif'

export default function CartWheelImg() {
    return(
        <div>
            <Image
            src={CartWheel}
            alt='cartWheelsiBeshy'
            width={300}
            />
        </div>
    )
}