import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class PriorityBadge
    implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
    private _container: HTMLDivElement;
    private _badge: HTMLSpanElement;
    private _notifyOutputChanged: () => void;

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;

        this._badge = document.createElement("span");
        this._badge.style.display      = "inline-block";
        this._badge.style.padding      = "4px 14px";
        this._badge.style.borderRadius = "4px";
        this._badge.style.color        = "#ffffff";
        this._badge.style.fontWeight   = "bold";
        this._badge.style.fontSize     = "13px";
        this._badge.style.fontFamily   = "Segoe UI, sans-serif";

        container.appendChild(this._badge);
        this._renderBadge(context.parameters.priorityValue.raw);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._renderBadge(context.parameters.priorityValue.raw);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {}

    private _renderBadge(value: number | null | undefined): void {
        switch (value) {
            case 3:
                this._badge.style.backgroundColor = "#c0392b";
                this._badge.textContent = "Critical";
                break;
            case 2:
                this._badge.style.backgroundColor = "#e67e22";
                this._badge.textContent = "High";
                break;
            default:
                this._badge.style.backgroundColor = "#27ae60";
                this._badge.textContent = "Normal";
                break;
        }
    }
}
