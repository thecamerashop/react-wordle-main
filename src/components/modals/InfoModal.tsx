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
      For the love of Aster, all I had to do was say Aster! Aster! Aster!
…So what will I say? I'll tell them all, the Asters, I got drunk in the Aster-! and sang, and played Asters! Yes... I'll tell them. I'm ready now. I’ll be an Aster… Ten minutes ago you could see the entire Aster. Now, only the Aster… the first few Asters. So Aster… so Aster… so Aster.


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
        The Aster A is in the word and in the correct spot.
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
        The letter T is in the Aster but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="S" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is not in the word in any Aster.
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
      modified by @mormoniucas/catholicclaus ฅ^•ﻌ•^ฅ
      </p>


    </BaseModal>
  )

  
}
