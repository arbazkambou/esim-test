"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/helpers/formatDateTime";
import { getOrderHistory } from "@/services/purchase/purchaseApis";
import { useQuery } from "@tanstack/react-query";
import { Clock4, CreditCard, NotepadText, RefreshCw, User } from "lucide-react";
import { Spinner } from "../../my-ui/fallbacks/Spinner";
import { Button } from "../../ui/button";

function OrderHistoryTable() {
  const {
    data = [],
    isPending,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["order-history"],
    queryFn: getOrderHistory,
  });

  return (
    <section className="container mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-h2-base font-500 md:text-h2-md xl:text-h2-xl">
          Transaction History
        </h2>
        <Button className="rounded-full shadow-none" onClick={() => refetch()}>
          {isRefetching ? (
            <>
              <RefreshCw size={20} className="animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <RefreshCw size={20} />
              Refresh
            </>
          )}
        </Button>
      </div>
      {isPending ? (
        <Spinner />
      ) : (
        <Table className="mt-4">
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead>
                <div className="flex gap-1">
                  <User size={19} className="shrink-0" />
                  <p>ID</p>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 text-base font-500">
                  <CreditCard size={19} className="shrink-0" />
                  <p>Amount</p>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 text-base font-500">
                  <NotepadText size={19} className="shrink-0" />
                  <p>Description</p>
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center gap-2 text-base font-500">
                  <Clock4 size={19} className="shrink-0" />
                  <p>Time</p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    {order.amount >= 0 ? (
                      <span className="rounded-[6px] bg-primary/10 px-[12px] py-[4px] font-500 text-primary">
                        ${order.amount}
                      </span>
                    ) : (
                      <span className="rounded-[6px] bg-destructive/10 px-[12px] py-[4px] font-500 text-destructive">
                        -${Math.abs(order.amount)}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{formatDateTime(order.created_at)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell
                className="mt-10 w-full bg-primary/10 p-3 text-center font-semibold text-primary"
                colSpan={4}
              >
                No data available
              </TableCell>
            )}
          </TableBody>
        </Table>
      )}
    </section>
  );
}

export default OrderHistoryTable;
