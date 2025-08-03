// 取自ES5.D.TS 仅供参考
interface Object {
    /** Object.prototype.constructor 的初始值是标准内置的 Object 构造函数。 */
    constructor: Function;

    /** 返回对象的字符串表示。 */
    toString(): string;

    /** 使用当前区域设置将对象转换为字符串返回。 */
    toLocaleString(): string;

    /** 返回指定对象的原始值。 */
    valueOf(): Object;

    /**
     * 确定对象是否具有指定名称的属性。
     * @param v 属性名。
     */
    hasOwnProperty(v: PropertyKey): boolean;

    /**
     * 确定一个对象是否存在于另一个对象的原型链中。
     * @param v 要检查其原型链的另一个对象。
     */
    isPrototypeOf(v: Object): boolean;

    /**
     * 确定指定的属性是否可枚举。
     * @param v 属性名。
     */
    propertyIsEnumerable(v: PropertyKey): boolean;
}


interface ObjectConstructor {
    new (value?: any): Object;
    (): any;
    (value: any): any;

    /** 对象类的原型引用。 */
    readonly prototype: Object;

    /**
     * 返回对象的原型。
     * @param o 引用原型的对象。
     */
    getPrototypeOf(o: any): any;

    /**
     * 获取指定对象的自有属性描述符。
     * 自有属性描述符是直接在对象上定义的，而非继承自对象原型的属性。
     * @param o 包含该属性的对象。
     * @param p 属性名称。
     */
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

    /**
     * 返回对象自有属性的名称。对象的自有属性是那些直接定义在该对象上的属性，
     * 而不是从对象的原型继承而来的。对象的属性包括字段（对象）和函数。
     * @param o 包含自有属性的对象。
     */
    getOwnPropertyNames(o: any): string[];

    /**
     * 创建一个具有指定原型或空原型的对象。
     * @param o 用作原型的对象。可以为null。
     */
    create(o: object | null): any;

    /**
     * 创建一个具有指定原型的对象，并且可以包含指定的属性。
     * @param o 用作原型的对象。可以为null。
     * @param properties 包含一个或多个属性描述符的JavaScript对象。
     */
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

    /**
     * 向对象添加属性，或修改现有属性的特性。
     * @param o 要添加或修改属性的对象。可以是原生JavaScript对象（即用户定义的对象或内置对象）或DOM对象。
     * @param p 属性名称。
     * @param attributes 属性的描述符。可以是数据属性或访问器属性的描述符。
     */
    defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;

    /**
     * 向对象添加一个或多个属性，和/或修改现有属性的特性。
     * @param o 要添加或修改属性的对象。可以是原生JavaScript对象或DOM对象。
     * @param properties 包含一个或多个描述符对象的JavaScript对象。每个描述符对象描述一个数据属性或访问器属性。
     */
    defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;

    /**
     * 防止修改现有属性的特性，并防止添加新属性。
     * @param o 要锁定特性的对象。
     */
    seal<T>(o: T): T;

    /**
     * 防止修改现有属性的特性和值，并防止添加新属性。
     * @param f 要锁定特性的对象。
     */
    freeze<T extends Function>(f: T): T;

    /**
     * 防止修改现有属性的特性和值，并防止添加新属性。
     * @param o 要锁定特性的对象。
     */
    freeze<T extends { [idx: string]: U | null | undefined | object; }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;

    /**
     * 防止修改现有属性的特性和值，并防止添加新属性。
     * @param o 要锁定特性的对象。
     */
    freeze<T>(o: T): Readonly<T>;

    /**
     * 防止向对象添加新属性。
     * @param o 要设为不可扩展的对象。
     */
    preventExtensions<T>(o: T): T;

    /**
     * 如果对象的现有属性特性无法被修改且无法向对象添加新属性，则返回true。
     * @param o 要测试的对象。
     */
    isSealed(o: any): boolean;

    /**
     * 如果对象的现有属性特性和值无法被修改，且无法向对象添加新属性，则返回true。
     * @param o 要测试的对象。
     */
    isFrozen(o: any): boolean;

    /**
     * 返回一个值，表示是否可以向对象添加新属性。
     * @param o 要测试的对象。
     */
    isExtensible(o: any): boolean;

    /**
     * 返回对象的可枚举字符串属性和方法的名称。
     * @param o 包含属性和方法的对象。可以是您创建的对象或现有的文档对象模型(DOM)对象。
     */
    keys(o: object): string[];
}

/**
 * 提供所有JavaScript对象通用的功能。
 */
declare var Object: ObjectConstructor;

