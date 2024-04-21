import React, { ReactNode } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
  

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    buttonText?: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    image?: string;
    buttonIcon?: string

}

const MeetingModal = ({ isOpen, onClose, title, buttonText, handleClick, className, children , image, buttonIcon } : MeetingModalProps ) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-full flex flex-col gap-6 px-6 py-9 max-w-[520px] text-white border-none bg-dark-1'>
        <div className="flex flex-col gap-6">
            {image && (
                <div className='flex justify-center'>
                    <Image
                       src={image}
                       alt='image'
                       width={70}
                       height={70}
                    />
                </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
            {children}
            <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
                {buttonIcon && (
                    <Image
                        src={buttonIcon}
                        alt='button icon'
                        width={15}
                        height={15}
                    />
                )}  
                {buttonText || 'Schedule Meeting'}
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MeetingModal