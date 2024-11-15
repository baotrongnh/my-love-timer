const AnimatedCard = ({ animation, digit }: { animation: string, digit: string }) => {
     return (
          <div className={`flipCard ${animation}`}>
               <span>{digit}</span>
          </div>
     )
}

export default AnimatedCard