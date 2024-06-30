import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: string | React.ReactElement;
  description?: string;
  className?: string;
  footer?: React.ReactNode;
}

/**
 *
 * @param open* Current open state of the modal
 * @param onOpenChange* Callback to change the open state
 * @param trigger Element that triggers the modal
 * @param title Title text for the modal
 * @param description Description text for the modal
 * @param children* Content to be displayed inside the modal
 * @param className Styling for Modal content
 * @param footer Footer content for the modal
 * @returns JSX element
 */
const Modal: React.FC<Props> = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  className,
  footer
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
