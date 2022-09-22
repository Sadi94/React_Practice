
function Tick() {
    const element = (
        <div align="center">
            {new Date().toLocaleTimeString()}.
        </div>
    );
    //root.render(element);
}

setInterval(Tick, 1000);