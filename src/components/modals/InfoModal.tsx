import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to Aster" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      "omg jrwidle is back!!!" lol u wish


      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="S" />
        <Cell value="T" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Aster
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="S" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Help?
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="S" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is
      </p>


      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      
      </p>


    </BaseModal>
  )

  
}
