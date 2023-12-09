import { BookCreateInput, ReviewDataInput, useCreateReviewMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useCreateReview = () => {
    const [CreateReview] = useCreateReviewMutation();
    const createReview = async (bookId: string, createInput: ReviewDataInput, bookData: BookCreateInput) => {
        const { data, errors } = await CreateReview({
            variables: {
                data: createInput,
                where: {
                    id: bookId,
                },
                bookData: bookData,
            },
            errorPolicy: "all",
        });
        if (errors) {
            console.log(errors)
            toast({
                title: "Error creating review",
                variant: "destructive",
            });
        }

        if (data && !errors) {
            toast({
                title: "Successfully created Review",
            });
            return data.createReview;
        }
        return null;
    };

    return {
        createReview,
    };
};
