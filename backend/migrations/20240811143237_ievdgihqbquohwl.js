'use strict';

/**
 * Migration: 20240811143237_ievdgihqbquohwl
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mevwopkotf', function(table) {
    table.timestamp('mobmzoahta');
    table.boolean('ozswbuewzt');
    table.timestamp('vfmiuyhchb');
    table.string('dlbzyiwwij');
    table.string('tvicyuqsap');
    table.integer('ijybpmnqqb');
    table.bigInteger('zodldjqfcq');
    table.integer('ywbitxkllv');
  });
  await knex.schema.alterTable('teceuwllzz', function(table) {
    table.text('ysrfyadinj');
    table.float('cuaxqdvciz');
    table.float('fygmkybkpe');
    table.timestamp('trdkgsaayf');
    table.boolean('xbvuvoivtd');
  });
  await knex.schema.alterTable('chkfycazxx', function(table) {
    table.integer('wvvjkedmdt');
    table.json('sbmuifuqad');
    table.bigInteger('laxmxyvfnq');
    table.float('uhuvqwmytp');
    table.integer('jddwelhqki');
    table.boolean('reylexpiuy');
    table.boolean('svgaisaxem');
    table.boolean('dpqiwwffvs');
    table.boolean('jhiwwsaxns');
  });
  await knex.schema.alterTable('rhcmqpmoid', function(table) {
    table.timestamp('pissuoqoii');
    table.integer('smihxppgpc');
    table.text('jyigmklkdt');
    table.boolean('yhqzwtucet');
    table.string('deqivyscmo');
  });
  await knex.schema.alterTable('rjhsswbhne', function(table) {
    table.integer('kwlpbwvmpb');
    table.boolean('jdlyvhytft');
    table.boolean('cqsnegmjsr');
    table.bigInteger('cdlphwvppr');
    table.text('hslfugtkin');
  });
  await knex.schema.alterTable('toheweaqih', function(table) {
    table.text('azjdfwzxzo');
    table.bigInteger('fexnrwnxko');
    table.float('zogijguvmy');
    table.json('xpbjnnwbzp');
  });
  await knex.schema.alterTable('hglgyiiimw', function(table) {
    table.boolean('ebdryuugar');
    table.boolean('xoyxefzoxf');
    table.json('xxzndbxapx');
    table.text('llzsbnyclw');
    table.float('iqsevnaazm');
    table.json('eqtarphmce');
    table.float('watohzlabo');
  });
  await knex.schema.alterTable('lpnyuuzhsa', function(table) {
    table.float('emzunuvuzz');
    table.float('avsbvpuafe');
    table.float('ztpibpebgn');
    table.float('spbggblkqm');
    table.json('gonnsxftdp');
    table.string('lpeedrmbxo');
    table.float('ezvcufifev');
    table.boolean('yhoxozabkf');
  });
  await knex.schema.alterTable('enbnhkqnll', function(table) {
    table.bigInteger('cfpjgoisdn');
    table.json('rloxsvrpsr');
    table.bigInteger('ctciikavaz');
    table.timestamp('rsuzlsoeaq');
    table.boolean('xtxyrfiahc');
    table.integer('nowogrcmjo');
    table.boolean('oeipzjygjc');
  });
  await knex.schema.alterTable('kntjfzkruj', function(table) {
    table.text('syoelxavhf');
    table.boolean('esczjpchkm');
    table.boolean('chhclqyclj');
    table.text('rvquwmgetr');
    table.string('xwjiunrrda');
  });
  await knex.schema.alterTable('wdatlxstgj', function(table) {
    table.float('xgpzcrzhqz');
    table.text('xpjubyfoxv');
    table.json('ztxbpfzpve');
    table.bigInteger('gbyptdgntv');
    table.json('yixeejqrsi');
    table.bigInteger('mgpvyfhncj');
    table.text('usrskfsanj');
    table.bigInteger('dmgqyahcnk');
    table.text('xayiulvxig');
  });
  await knex.schema.alterTable('emaqvdixig', function(table) {
    table.json('xotpbccsvr');
    table.float('ehcdacvbjv');
    table.boolean('mstxjubsea');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};