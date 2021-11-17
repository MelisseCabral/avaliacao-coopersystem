export class MathUtils {
    public static formatRealNoLetter( value: number )
    {
        const aux = value.toFixed(2).toString();
        const [int, dec] = aux.split('.');
        const v = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + dec;   
    
        return v;
        
    }

    public static formatReal( value: number )
    {
        const aux = this.formatRealNoLetter(value);
        return `R$ ${aux}`;
        
    }
    public static formatRealToFloat( value: string )
    {
        var f = value.replace('R$','').replace('.','').replace(',','.');
        return parseFloat(f);
        
    }
}