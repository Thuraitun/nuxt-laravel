import { AxiosError } from "axios";
import type { FormKitNode } from "@formkit/core"

export function handleInvalidForm(err: any, node?: FormKitNode) {
    if(err instanceof AxiosError && err.response?.status === 422) {
        node?.setErrors([], err.response.data.errors);
      }
} 