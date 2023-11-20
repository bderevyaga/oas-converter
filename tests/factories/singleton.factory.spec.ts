import { SingletonFactory } from '../../src/factories/singleton.factory';

describe('SingletonFactory', () => {
    describe('SingletonFactory', () => {
        it('should return value', () => {
            class Class extends SingletonFactory<Class>() {
                public value = 'default_value';
            }

            expect(Class.getInstance().value).toEqual('default_value');
        });

        it('should update value', () => {
            class Class extends SingletonFactory<Class>() {
                public value = 'default_value';
            }

            Class.getInstance().value = 'new_value';

            expect(Class.getInstance().value).toEqual('new_value');
        });
    });
});
