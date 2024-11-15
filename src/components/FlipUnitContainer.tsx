import AnimatedCard from "./AnimatedCard"
import StaticCard from "./StaticCard"

const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: number, shuffle: boolean, unit: string }) => {

     const currentDigitNumber = digit
     let previousDigitNumber = digit - 1
     let previousDigit: string
     let currentDigit: string

     if (unit !== 'hours') {
          previousDigitNumber = previousDigitNumber === -1
               ? 59
               : previousDigitNumber;
     } else {
          previousDigitNumber = previousDigitNumber === -1
               ? 23
               : previousDigitNumber;
     }

     if (currentDigitNumber < 10) {
          currentDigit = `0${currentDigitNumber}`
     } else {
          currentDigit = `${currentDigitNumber}`
     }
     if (previousDigitNumber < 10) {
          previousDigit = `0${previousDigitNumber}`
     } else {
          previousDigit = `${previousDigitNumber}`
     }

     const digit1 = shuffle
          ? previousDigit
          : currentDigit
     const digit2 = !shuffle
          ? previousDigit
          : currentDigit

     const animation1 = shuffle
          ? 'fold'
          : 'unfold'
     const animation2 = !shuffle
          ? 'fold'
          : 'unfold'

     return (
          <div className={'flipUnitContainer'}>
               <StaticCard
                    position={'upperCard'}
                    digit={currentDigit}
               />
               <StaticCard
                    position={'lowerCard'}
                    digit={previousDigit}
               />
               <AnimatedCard
                    digit={digit1}
                    animation={animation1}
               />
               <AnimatedCard
                    digit={digit2}
                    animation={animation2}
               />
          </div>
     )
}

export default FlipUnitContainer