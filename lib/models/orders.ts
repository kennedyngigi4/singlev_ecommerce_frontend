export interface Order {
    id: string,
    order_id: string,
    total_amount: string,
    quantity: number,
    mpesa_number: string,
    date_created: string,
    status: string,
    payment_status: string
}