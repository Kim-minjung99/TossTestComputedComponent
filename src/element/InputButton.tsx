function InputButton({triggerSelectedValue}: { triggerSelectedValue: string|string[]}) {
    return (
        <div>
            <button>눌러주세용</button>
            {triggerSelectedValue}
        </div>
    );
}

export default InputButton;