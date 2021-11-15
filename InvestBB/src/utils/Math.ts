export class MathUtils {
    public static formatRealNoLetter( value: number )
    {
        var f = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return f.replace('R$','');
        
    }
    public static formatReal( value: number )
    {
        var f = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return f;
        
    }
    public static formatRealToFloat( value: string )
    {
        var f = value.replace('R$','').replace('.','').replace(',','.');
        return parseFloat(f);
        
    }
}