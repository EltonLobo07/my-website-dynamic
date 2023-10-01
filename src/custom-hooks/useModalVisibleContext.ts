import { ModalVisible } from "~/contexts/ModalVisible";
import { useCustomContext } from "~/custom-hooks/useCustomContext";

export function useModalVisibleContext() {
    return useCustomContext(
        ModalVisible,
        "useModalVisibleContext cannot be used in a component that can't acess the Modal Visible context"
    );
}
