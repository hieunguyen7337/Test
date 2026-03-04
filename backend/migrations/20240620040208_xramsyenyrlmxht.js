'use strict';

/**
 * Migration: 20240620040208_xramsyenyrlmxht
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gkdvxwurpp', function(table) {
    table.text('kfkrcfoghc');
    table.timestamp('mdfpgycfkt');
    table.json('higrmemzft');
    table.text('grkwfvkafm');
    table.string('vrxhaptldq');
    table.boolean('jukpfzoyvo');
    table.bigInteger('pnajaoitie');
    table.boolean('pazzvyzhwp');
  });
  await knex.schema.alterTable('nvvwqgncwg', function(table) {
    table.timestamp('fdpfzmzyfa');
    table.integer('wtlnuhjpva');
    table.text('nhseyrlotd');
    table.float('ademejmivk');
    table.json('ufhagzqlmr');
    table.integer('uxcpuiuqil');
    table.integer('gcwmsarwgv');
  });
  await knex.schema.alterTable('fniwgfbpej', function(table) {
    table.bigInteger('ixqgxyqitz');
    table.string('uvicechxre');
    table.float('pwkjuglmzp');
    table.boolean('dofadxtrtn');
    table.text('yagggqesgd');
    table.text('fgefuithpl');
  });
  await knex.schema.alterTable('vhyzroswrr', function(table) {
    table.bigInteger('yxyvzadniy');
    table.integer('fggovfqmjq');
    table.string('awkwgckbzb');
    table.integer('iapesdrmvp');
    table.bigInteger('tojtefbrsr');
    table.timestamp('yhfvyntuvd');
    table.string('wxidkkesyn');
    table.bigInteger('ncdyggfoob');
    table.string('hhmgkdgtyu');
    table.timestamp('pmdjpkkhrb');
  });
  await knex.schema.alterTable('axjvceuhky', function(table) {
    table.string('iydnyprlfx');
    table.integer('kwmgzsfuzx');
    table.float('uvywmdbcwq');
    table.string('eyoqxtoxqc');
    table.integer('tzpnczsvog');
  });
  await knex.schema.alterTable('tnufrxtdjg', function(table) {
    table.text('tizkgwjtwl');
    table.json('ohnkiuvpsc');
    table.json('cqhdhjgojd');
  });
  await knex.schema.alterTable('dcrsyufkop', function(table) {
    table.float('swsfkykpvp');
    table.float('rszbpqydnj');
    table.bigInteger('opcxqhfejk');
    table.timestamp('kxkdknxgmm');
    table.text('myxstnrids');
  });
  await knex.schema.alterTable('ryiktcqdxp', function(table) {
    table.float('wkiftyphuq');
    table.string('ccrxaglsnn');
    table.json('xvugzjvhkv');
  });
  await knex.schema.alterTable('djkrglylue', function(table) {
    table.string('tbcrcuarrb');
    table.integer('gpttzxzizj');
    table.timestamp('pfuqemdqdt');
    table.integer('zuvpsirokn');
    table.boolean('ebuymiieja');
    table.timestamp('hhhpfbefjx');
    table.float('eddoxwzdsb');
    table.integer('ouruzpgqtw');
    table.json('nbgmqtarwi');
    table.integer('fllcqukeap');
  });
  await knex.schema.alterTable('oasgdscjov', function(table) {
    table.float('nwrulotctc');
    table.boolean('bpdgpymxfc');
    table.boolean('ljljvccddr');
    table.timestamp('ltlgscsmpq');
    table.integer('lcwblmbzbb');
    table.integer('hqncyemdzx');
    table.boolean('xigkifkrqt');
    table.timestamp('axvccmukzj');
    table.timestamp('vkyhfvmgjk');
    table.string('lbyrinnrxw');
  });
  await knex.schema.alterTable('shjkjknwlk', function(table) {
    table.timestamp('zsrjovqbnq');
    table.string('utfnrnnmre');
    table.bigInteger('dftfkabfbi');
    table.string('dzkdehlzyn');
    table.json('lpakukxdtp');
    table.integer('kukjdbypdd');
  });
  await knex.schema.alterTable('pfxggaetec', function(table) {
    table.float('rrzlzplkox');
    table.timestamp('vuaqffecbv');
    table.string('ytwdwbcxcg');
    table.text('ihlruubwgc');
    table.bigInteger('kupiwkahpn');
  });
  await knex.schema.alterTable('btqruurgfj', function(table) {
    table.boolean('bbnzkmdzap');
    table.boolean('jawqetwats');
    table.timestamp('irayjgcneu');
    table.bigInteger('hfbgibufpp');
    table.integer('hebedzjpvb');
    table.text('arhjzlchts');
    table.string('qmkjzjtums');
  });
  await knex.schema.alterTable('kkcihkbwla', function(table) {
    table.float('psqcqvpamm');
    table.text('knhcvwhyrk');
    table.float('kowrwfivxo');
    table.text('eriuqcowks');
    table.json('fqadugbfsy');
    table.bigInteger('onilxmpehz');
    table.bigInteger('ibvnqtglnr');
    table.text('sbisvdurcd');
    table.timestamp('cbvndcuuel');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};