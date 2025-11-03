import type { FC } from "react";
import RentalAgreement from "./RentalAgreement";


const RentalSubsidy: FC = () => {
    return (
        <>
            <div className="pt-5">
                <div className="min-h-screen py-10 px-4">
                    <RentalAgreement />
                </div>
            </div>
        </>
    )
}

export default RentalSubsidy;