import ConnectWallet from "@components/common/ConnectWallet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useAccount } from "wagmi";

interface PropsType<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const TxnPoolsTable = <TData, TValue>({ columns, data }: PropsType<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  const { isConnected } = useAccount();

  return (
    <Table className="bg-primary-gray rounded-xl">
      <TableHeader className="border-b border-[#292B31]">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className="font-bold text-base/4 text-white">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="divide-y divide-[#292B31]">
        {!isConnected ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-72 text-center w-full">
              <div className="flex flex-col items-center w-full text-center gap-5">
                <span className="font-normal text-base/7 text-[#B5B5B5]">
                  Connect Wallet to view your transactions.
                </span>
                <ConnectWallet />
              </div>
            </TableCell>
          </TableRow>
        ) : table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-72 text-center">
              Coming Soon.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TxnPoolsTable;
