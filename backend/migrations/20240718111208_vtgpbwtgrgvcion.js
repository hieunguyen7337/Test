'use strict';

/**
 * Migration: 20240718111208_vtgpbwtgrgvcion
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aitzjjngnh', function(table) {
    table.text('asvhexhgxk');
    table.float('yygsbsxzug');
    table.bigInteger('jwcqxqscaf');
  });
  await knex.schema.alterTable('jwjeutkrcv', function(table) {
    table.bigInteger('bvcuadjtxk');
    table.float('ecylfdmuld');
    table.integer('plxsbnphjh');
  });
  await knex.schema.alterTable('lfmkfewoxf', function(table) {
    table.string('aorbnsboru');
    table.timestamp('ixwsefdbuj');
    table.integer('qhequcbeyu');
  });
  await knex.schema.alterTable('eaegfmudou', function(table) {
    table.integer('ufdkqnhxwa');
    table.text('xpvqchqcoy');
    table.integer('wmwlpatixj');
    table.timestamp('fmipvvpnsm');
  });
  await knex.schema.alterTable('supuvjvjww', function(table) {
    table.integer('dqywuhgtyu');
    table.float('ntgyjqolzv');
    table.string('zwlriafuqs');
    table.boolean('bfnlnkkuvx');
    table.json('tuisaplfgp');
    table.timestamp('afnynhtepr');
    table.bigInteger('iibmwylzmm');
    table.json('gmcevkaxuu');
    table.float('demygoxtxa');
  });
  await knex.schema.alterTable('navlosvdkg', function(table) {
    table.text('nemwoywojq');
    table.float('etopwmunuq');
    table.integer('afhxkqmgsq');
    table.json('tsqqcgayae');
    table.integer('qipmqvwwwq');
    table.boolean('xzrxxpgniy');
  });
  await knex.schema.alterTable('ryofaekffz', function(table) {
    table.float('lkvdcfykhi');
    table.boolean('lovqclpgzc');
    table.float('hmmcywwfbw');
  });
  await knex.schema.alterTable('tdbchhugvy', function(table) {
    table.float('qkactstmtq');
    table.boolean('mkhviyutdd');
    table.boolean('tejlhgaqjv');
    table.boolean('yncjcaycqj');
    table.timestamp('jdvlekfksq');
  });
  await knex.schema.alterTable('xdcsigwlbh', function(table) {
    table.integer('zfkhmstuyy');
    table.string('egkvznlahz');
    table.timestamp('zshxoiuljo');
    table.integer('qrczcoyzvk');
    table.boolean('wkddtksgtn');
    table.bigInteger('miiyzjsdvb');
    table.bigInteger('ttrnnzvjou');
    table.bigInteger('ntyubhavmc');
    table.bigInteger('keftrrbtmw');
  });
  await knex.schema.alterTable('rsvlgqitvd', function(table) {
    table.boolean('noujcmouif');
    table.text('tgwovojnzo');
    table.integer('oawjskbrrj');
    table.bigInteger('yksnybmith');
    table.integer('asvollqyal');
    table.boolean('axeorwuvmc');
  });
  await knex.schema.alterTable('vdrmkbnlrb', function(table) {
    table.json('ycxrkkvrmi');
    table.boolean('nqekdgzocb');
    table.boolean('kuiztjmtul');
    table.integer('ypykaznked');
    table.string('atxgvehqse');
    table.text('hvrkphqjub');
    table.bigInteger('ftffojbskh');
  });
  await knex.schema.alterTable('zfmdaqytis', function(table) {
    table.string('dogfxrkyyn');
    table.text('ntqjfijufk');
    table.timestamp('ozkquifydk');
    table.json('rznznpeegs');
  });
  await knex.schema.alterTable('eoemoqhtpi', function(table) {
    table.string('irdwwicarn');
    table.string('fvunuhaatp');
    table.float('kzthgkjdoh');
  });
  await knex.schema.alterTable('irmeiyfaow', function(table) {
    table.text('sgwxxndpeh');
    table.timestamp('kpzfqnrvys');
    table.timestamp('xqwwukbeuc');
    table.json('ilsimrxsnr');
    table.text('oikgxpnddt');
    table.string('abhyhyutcs');
  });
  await knex.schema.alterTable('airwikheti', function(table) {
    table.json('rbfeikrvfw');
    table.text('qhosxmzzbg');
    table.text('masdkrliko');
    table.bigInteger('mkntcrgkul');
    table.integer('lutdrulsjh');
    table.timestamp('mlgurbkaef');
    table.string('fdebsjupce');
    table.timestamp('mzxmprhipe');
    table.text('ctgkslzuku');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};