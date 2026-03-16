import React from 'react'
import PendingIcon from "@/components/atoms/icons/PendingIcon";
import CompletedIcon from "@/components/atoms/icons/CompletedIcon";
import RejectedIcon from "@/components/atoms/icons/RejectedIcon";

export enum Status {
    // green
    COMPLETED = "COMPLETED",
    ACCEPTED = "ACCEPTED",
    // red
    REJECTED = "REJECTED",
    // orange
    PROCESSING = "PROCESSING",
    PENDING = "PENDING",
}
const StatusText: Record<Status, string> = {
    [Status.COMPLETED]: "مكتمل",
    [Status.ACCEPTED]: "تم القبول",
    [Status.REJECTED]: "مرفوض",
    [Status.PROCESSING]: "قيد المعالجة",
    [Status.PENDING]: "معلق",
}
const StatusColors: Record<Status, string> = {
    [Status.COMPLETED]: "#047857",
    [Status.ACCEPTED]: "#047857",
    [Status.REJECTED]: "#B91C1C",
    [Status.PROCESSING]: "#DD7A44",
    [Status.PENDING]: "#DD7A44",
}
function StatusBadge({ status }: { status: Status }) {
    const renderIcon = () => {
        switch (status) {
            case Status.COMPLETED:
            case Status.ACCEPTED:
                return <CompletedIcon />
                break;
            case Status.REJECTED:
                return <RejectedIcon />
                break;
            case Status.PROCESSING:
            case Status.PENDING:
                return <PendingIcon />
                break;
        }
    }
    return (
        <div className='flex flex-row items-center justify-center gap-2 '>
            <div style={{ color: StatusColors[status] }}>{StatusText[status]}</div>
            {renderIcon()}
        </div>
    )
}

export default StatusBadge
